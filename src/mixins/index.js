export default {
	methods: {

	    //  获取 url 参数
	    GetQueryString(name) {
	      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	      var r = window.location.search.substr(1).match(reg);
	      if(r!=null)return  unescape(r[2]); 
	      return null;
	    },

	    //  获取 路由 参数
	    GetRouteString(name) {
	      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	      var r = window.location.href.substr(1).match(reg);
	      if(r!=null)return (r[2]); 
	      return null;
	    },


	    //	自定义 latex 解析  （在普通latex解析之前）
	    customLatex(str) {

	    	//	\%
	    	str = str.replace(/\\%/g, '%');

	    	//	 \textbf
	    	var array = str.match(/\\textbf\{[^{]+\}/g);

	    	if(array){
	    		for(var i in array){
					var val = array[i].replace(/\\textbf{/, '').replace(/\}/, '')
				    var newVal = '<b>'+ val +'</b>';
				    str = str.replace(/\textbf/g, '\\textbf').replace(array[i],newVal)
				}
	    	}

	    	//	 \textit
	    	var array = str.match(/\\textit\{[^{]+\}/g);
	    	if(array){
	    		for(var i in array){
					var val = array[i].replace(/\\textit{/, '').replace(/\}/, '')
				    var newVal = '<i>'+ val +'</i>';
				    str = str.replace(/\textit/g, '\\textit').replace(array[i],newVal)
				}
	    	}

	    	//	\newline
	    	str = str.replace(/\\newline/g, '<br>');

	    	if(str.indexOf('<br>') >= 0){

	    		var array = str.split('<br>');

	    		var html = '';
	    		for(var i in array){
	    			html += '<span style="text-indent: 28px;display: block;"> ' + array[i] + ' </span>'
	    		}

	    		str = html;
	    	}

	    	//	\textperthousand
	    	str = str.replace(/\\textperthousand/g, '‰');

	    	//	\textbullet
	    	str = str.replace(/\\textbullet/g, '&middot;');


	    	//	大于等于
	    	str = str.replace(/\$\\ge\$/g, '&ge;');
	    	//	小于等于
	    	str = str.replace(/\$\\le\$/g, '&le;');
	    	//	小于
	    	str = str.replace(/\$\\lt\$/g, '&lt;');
	    	//	大于
	    	str = str.replace(/\$\\gt\$/g, '&gt;');
	    	//	小于
	    	str = str.replace(/\\textless/g, '&lt;');
	    	//	大于
	    	str = str.replace(/\\textgreater/g, '&gt;');
	    	//	波浪线
	    	str = str.replace(/\\textasciitilde/g, '~');



	    	//	''
	    	str = str.replace(/''/g, '``');


	    	//	*********  latex 解析器
	    	str = ltxParse(str);

	    	//	\mbox\textregistered
	    	str = str.replace(/\\mbox\\textregistered/g,'&reg;');


			
	    	return str;
	    },

	    //  内容段落处理
	    p_split(cnt) {

	    	if(!cnt) return;

	      	var array = cnt.split('，')
	      	var html = '';
	      	for(var i in array){
	        	html += '<p>' + array[i] + '</p>';
	      	}

	      	return html;
	    },

	    //	风险等级解析
	    /*levelhandle(type) {
      	
      		var val = '';
		    switch(type){
		        case 'Low Risk':
		          val = 1;
		          break;
		        case 'Under Average Risk':
		          val = '2';
		          break;
		        case 'Average Risk':
		          val = '3';
		          break;
		        case 'Above Average Risk':
		          val = '4';
		          break;
		        case 'Increased Risk':
		          val = '5';
		          break;
		    }

		    return val;
	    },*/

	    //	风险解析字段集中处理
	    fieldshandle() {


			if(this.info.report['CN'].epidemiology){
            	this.info.report['CN'].epidemiology = this.customLatex(this.info.report['CN'].epidemiology);
          	}
          	if(this.info.report['CN'].risk_elements){
            	this.info.report['CN'].risk_elements = this.customLatex(this.info.report['CN'].risk_elements);
          	}
			if(this.info.report['CN'].accessory_examination){
            	this.info.report['CN'].accessory_examination = this.customLatex(this.info.report['CN'].accessory_examination);
          	}
			if(this.info.report['CN'].drugs){
            	this.info.report['CN'].drugs = this.customLatex(this.info.report['CN'].drugs);
          	}
          	if(this.info.report['CN'].adaptation_diseases){
            	this.info.report['CN'].adaptation_diseases = this.customLatex(this.info.report['CN'].adaptation_diseases);
          	}
          	if(this.info.report['CN'].drug_introduction){
            	this.info.report['CN'].drug_introduction = this.customLatex(this.info.report['CN'].drug_introduction);
          	}
          	if(this.info.report['CN'].method_of_training){
            	this.info.report['CN'].method_of_training = this.customLatex(this.info.report['CN'].method_of_training);
          	}
          	if(this.info.report['CN'].cautions_of_training){
            	this.info.report['CN'].cautions_of_training = this.customLatex(this.info.report['CN'].cautions_of_training);
          	}
	    	if(this.info.report['CN'].name){
            	this.info.report['CN'].name = this.customLatex(this.info.report['CN'].name);
          	}
          	if(this.info.report['CN'].introduction){
            	this.info.report['CN'].introduction = this.customLatex(this.info.report['CN'].introduction);
          	}
			if(this.info.report['CN'].symptom){
            	this.info.report['CN'].symptom = this.customLatex(this.info.report['CN'].symptom);
          	}
          	if(this.info.report['CN'].procedure){
            	this.info.report['CN'].procedure = this.customLatex(this.info.report['CN'].procedure);
          	}
          	if(this.info.report['CN'].food){
	            this.info.report['CN'].food = this.customLatex(this.info.report['CN'].food);
	        }
	        if(this.info.report['CN'].oral){
	           this.info.report['CN'].oral = this.customLatex(this.info.report['CN'].oral);
	        }
          	if(this.info.report['CN'].topical){
            	this.info.report['CN'].topical = this.customLatex(this.info.report['CN'].topical);
          	}
          	if(this.info.report['CN'].training_methods){
            	this.info.report['CN'].training_methods = this.customLatex(this.info.report['CN'].training_methods);
          	}
          	if(this.info.report['CN'].clinical_significance){
            	this.info.report['CN'].clinical_significance = this.customLatex(this.info.report['CN'].clinical_significance);
          	}
          	if(this.info.report['CN'].table.prevalence_world){
            	this.info.report['CN'].table.prevalence_world = this.customLatex(this.info.report['CN'].table.prevalence_world);
          	}
          	if(this.info.report['CN'].incidence_world){
            	this.info.report['CN'].incidence_world = this.customLatex(this.info.report['CN'].incidence_world);
          	}
	    },


	    //	 风险结果英文翻译
	    /*resultMeaning(type) {

	    	var str = '';
	    	switch(type){
	    		case 'Increased Risk':
	    			str = '高风险';
	    			break;
	    		case 'Above Average Risk':
	    			str = '较高风险';
	    			break;
	    		case 'Average Risk':
	    			str = '平均风险';
	    			break;
	    		case 'Under Average Risk':
	    			str = '较低风险';
	    			break;
	    		case 'Low Risk':
	    			str = '低风险';
	    			break;
	    	}

	    	return str;
	    	                           
	    }*/

	}
}