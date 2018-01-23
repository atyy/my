var express = require('express');
var app = express();
var ejs = require('ejs');
var axios = require('axios');
var formidable = require('formidable');


app.use(express.static('./public'));
app.engine('html',ejs.__express);
app.set('view engine','html');


var reqUrl = 'http://wx-api-test.jianlujiyin.com';


//	云服务
app.get('/', function(req, res){
    res.render('cloud');
});

//	账号绑定与解绑
app.get('/acbind', function(req, res){
	res.render('acbind');
});

//	样本采集
app.get('/bind', function(req, res){
    res.render('bind');
});

//	我的订单
app.get('/orders', function(req, res){
	res.render('order');
});

//	我的报告
app.get('/reports', function(req, res){
	res.render('report');
});

//	我的报告详情信息
app.get('/reports/info', function(req, res){
	res.render('reports');
});

//	查看事例报告
app.get('/example', function(req, res){
	res.render('example');
});



//	获取检测产品接口
app.post('/orders/check_barcode', function(req, res){


	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;

        axios({
			url: reqUrl + '/api/orders/check_barcode',
			data: fields,
			method: 'get'
		}).then(function(result){
				
			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){
			
			res.json({
				success: false,
				data: error.response.data
			});
		});

    });

});

//	绑定
app.post('/orders/bind', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;
      
        axios({
			url: reqUrl + '/api/orders/bind',
			data: fields,
			method: 'post'
		}).then(function(result){
				
			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

    });
});

//	发送短信验证码
app.get('/send_sms', function(req, res){

	var tel = req.query.tel;
	axios({
		url: reqUrl + '/api/send_sms?tel='+tel
	}).then(function(result){
		
		res.json({
			success: true,
			data: result.data
		});
	}).catch(function(error){
		
		res.json({
			success: false,
			data: error.response.data
		});
	});
});

//	绑定手机
app.post('/wx/bind_tel', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;

		axios({
			url: reqUrl + '/api/wx/bind_tel',
			data: fields,
			method: 'post'
		}).then(function(result){
			
			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			var status = error.response.status;
			res.writeHeader(200, {'content-type': 'application/x-www-form-urlencoded'})
			res.write(JSON.stringify({
					success: false,
					data: error.response.data
				})
			);
			res.end();
		});
	});
});


//	订单列表
app.post('/orders_list', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;
      

        axios({
			url: reqUrl + '/api/orders?access_token=' + fields.access_token
		}).then(function(result){

			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

    });
});

//	报告列表
app.post('/reports', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;
      
        axios({
			url: reqUrl + '/api/reports?access_token=' + fields.access_token
		}).then(function(result){

			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

    });
});


//	获取用户标识
app.post('/wx/check_token', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;
      
        axios({
			url: reqUrl + '/api/wx/check_token?access_token=' + fields.access_token
		}).then(function(result){

			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

    });
});



//	获取用户标识
app.post('/wx_jssdk', function(req, res){

	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return err;

        axios({
			url: reqUrl + '/api/wx_jssdk?url=' + fields.url
		}).then(function(result){

			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

    });
});


//	下载报告
app.get('/reports/:id/download', function(req, res){


	var access_token = req.query.access_token;
	var id = req.params.id;


    axios({
		url: reqUrl + '/api/reports/' + id + '/download?access_token=' + access_token
	}).then(function(result){


		res.json({
			success: true,
			data: result.data
		});
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});




//	第三层报告
app.get('/web_reports/detail/:id', function(req, res){

	var access_token = req.query.access_token;
	var phenotype_id = req.query.phenotype_id;
	var id = req.params.id;
	var type = 'detail';

		axios({
			url: reqUrl + '/api/web_reports/' + id + '?access_token=' + access_token + '&type=' + type + '&phenotype_id=' + phenotype_id
		}).then(function(result){

			res.json({
				success: true,
				data: result.data
			});
		}).catch(function(error){

			res.json({
				success: false,
				data: error.response.data
			});
		});

});



//	第二层报告


/*
  	处理步骤：
            1.	获得第二层报告数据列表
            2.	第二层数据列表按照  大类进行  分类 如： 健康风险
            3.	大类分类后   把每个小子类  整理进父类集合
          * 4.	这一步将调用另一个接口 - 风险项查询
            5.  查询出风险项目后，按照风险项目父类的数量  插入原先 分类好的集合  新增字段 num(对应风险项目的数量)
            6.	然后把集合按照 num 字段进行 冒泡排序，从大到小，完成结束
*/


app.get('/web_reports/list/:id', function(req, res){

	var access_token = req.query.access_token;
	var id = req.params.id;
	var type = 'summary';


	//	获取前端  页面类别
	var reportsCategory = req.query.reportsCategory;


	axios({
		url: reqUrl + '/api/web_reports/' + id + '?access_token=' + access_token + '&type=' + type + '&supercategory=' + encodeURI(reportsCategory)
	}).then(function(result){



		var data = result.data;



		//	1. 获取分类下的  《《所有》》 集合数据 ( 不是用户数据 )
		var phenotype_ids = data.meta.phenotype_ids[reportsCategory];   //	-- 分类数据

		//	2. 把用户数据与该分类所有数据  匹配
		var phenoArray = data.phenotype;								//	-- 用户数据

		//	执行总共次数计算
		var allNum = phenotype_ids.length * phenoArray.length;
		var num = 0;


		


		for(var x in phenotype_ids){
			for(var y in phenoArray){

				
				//	判断用户报告与所有报告数据比对
				if(phenotype_ids[x].id === phenoArray[y].phenotype_id){


					var item = phenotype_ids[x];								//	保存该对象

					item.in = true;												//	标识该报告为用户存在

					item.params = phenoArray[y].params;							//	把用户的数据 与 报告数据合并
					item.phenotype_id = phenoArray[y].phenotype_id;

					phenotype_ids.splice(x, 1);									//	删除数组  指定索引处对象
					phenotype_ids.unshift(item);								//	对象  插入到数组前面
				}

				++num;

				//	循环结束
				if(allNum == num){
					handle_3();
					return;
				}
			}
		}


		function handle_3(){
		

			//	3. 装载完分类数据后，进行按照子分类  划分 装载
			var phenoSubArray = [];

			var j = 0;
			toSub();


			function toSub(){

				if(phenotype_ids.length > j){

					var category = phenotype_ids[j].taxonomy.category;

			
					var k = 0;

					var isFind = 0;		//	用于判断是否找到

					toFind();


					//	从新的装载箱中查询是否存在父级分类
					function toFind(){


						if(phenotype_ids.length > k){

							

							if(phenoSubArray[k] && phenoSubArray[k].name === category){

								phenoSubArray[k].subArray.push(phenotype_ids[j]);

								isFind = 1;		//	终止创建新对象

								//	退出查询
								k = phenotype_ids.length;

							}


							++k;
							toFind();

						} else {

							if(!isFind){

								var obj = {
									name: category,
									subArray: []
								};

								obj.subArray.push(phenotype_ids[j]);

								phenoSubArray.push(obj);

							}

						}

					}


					++j;
					toSub();
				} else {

					getAttention(res, access_token, id, phenoSubArray, reportsCategory, phenoArray);

				}

			}

		}
			
		
		
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});


//	获取风险项   ----  为报告二级分类提供
function getAttention(res, access_token, id, phenoSubArray, type, phenoArray){

	axios({
		url: reqUrl + '/api/outstanding_phenotype/'+ id +'?access_token=' + access_token + '&supercategory=' + encodeURI(type)
	}).then(function(result){


		
		//	1. 获取所有风险项
		var attentionArray = result.data.attention_items;


		//	2. 分类完成  计算风险项数量统计
		var j = 0;
		toNum();

		function toNum(){


			

			if(phenoSubArray.length > j){

				//	初始化  每个分类数量
				phenoSubArray[j].num = 0;


				//	在风险统计集合中查询
				var k = 0;

				toFind();


				//	从 风险项中  遍历数量
				function toFind(){



					if(attentionArray.length > k){

						var category = attentionArray[k].category;

						
						//	判断一级分类是否存在风险项
						if(phenoSubArray[j] && phenoSubArray[j].name === category){

							phenoSubArray[j].num += 1;

						}

						var s = 0;
						toSubFind();

						//	判断二级分类是否存在风险项 , 匹配子分类项  匹配成功  说明子分类含有风险项   加入新的字段  前端处理样式
						function toSubFind(){

							if(phenoSubArray[j].subArray.length > s){

								if(phenoSubArray[j].subArray[s].id === attentionArray[k].phenotype_id){

									phenoSubArray[j].subArray[s].Attention = true;					//	标记项目  为风险项

									var attentionItem = phenoSubArray[j].subArray[s];
					                phenoSubArray[j].subArray.splice(s, 1);
					                phenoSubArray[j].subArray.unshift(attentionItem)

								}

								++s;
								toSubFind();
							}
						}

						

						++k;
						toFind();

					}

				}

				++j;
				toNum();

			} else {


				//	3. 得到每个风险项数量后， 开始对  原先得到的子分类 (phenoSubArray) 进行排序

				//	从大到小 - 冒泡排序
				var str = '';
				var x = 0;
				sort();

				function sort(){

					if(phenoSubArray.length > x){


						var y = x + 1;
						sort_2();

						function sort_2(){

							if(phenoSubArray.length > y){

								if(phenoSubArray[x].num < phenoSubArray[y].num){
									
									str = phenoSubArray[x];
									phenoSubArray[x] = phenoSubArray[y];
									phenoSubArray[y] = str; 
								}

								++y;
								sort_2();
							}

						}

						++x;
						sort();

					} else {



						return res.json({
							success: true,
							data: phenoSubArray,
							phenoArray: phenoArray
							//fengxian: attentionArray	//	风险项
						});

					}
				}


			}


		}

				
	

		
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});
}


//	获取报告首页  数量
app.get('/web_reports_total/:reportsId', function(req, res){


	var access_token = req.query.access_token;
	var reportsId = req.params.reportsId;


    axios({
		url: reqUrl + '/api/web_reports_total/'+reportsId + '?access_token=' + access_token
	}).then(function(result){
		
		res.json({
			success: true,
			data: result.data
		});
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});



//	获取所有风险项    ----   重点关注项
app.get('/outstanding_phenotype/:report_id', function(req, res){


	var access_token = req.query.access_token;
	var report_id = req.params.report_id;


    axios({
		url: reqUrl + '/api/outstanding_phenotype/'+ report_id +'?access_token=' + access_token
	}).then(function(result){

		
		res.json({
			success: true,
			data: result.data
		});
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});

//	获取搜索列表
app.get('/search/phenotype', function(req, res){


	var access_token = req.query.access_token;
	var term = req.query.term;

    axios({
		url: encodeURI(reqUrl + '/api/search/phenotype?access_token=' + access_token + '&term=' + term + '&page_size=10&page=1&summary=1')
	}).then(function(result){
		
		res.json({
			success: true,
			data: result.data
		});
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});


//	获取下载报告
/*app.get('/report/get', function(req, res){


	var access_token = req.query.access_token;
	var key = req.query.key;
	var fid = req.query.fid;

    axios({
		url: reqUrl + '/api/report/get?access_token=' + access_token + '&key=' + key + '&fid=' + fid
	}).then(function(result){
		
		res.json({
			success: true,
			data: result
		});
	}).catch(function(error){

		res.json({
			success: false,
			data: error.response.data
		});
	});

});*/



app.listen(1314);
console.log('listen to 1314 port')