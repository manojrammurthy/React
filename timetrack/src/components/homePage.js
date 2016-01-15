"use strict";

var React = require('react');


var Upper = React.createClass({
		render:function(){
			return (
				<div className="container">
					<div className="row">
					    <div className="col-lg-6 "><h4>React.js Project Tracker</h4></div>
					    <div className="col-lg-6 ">
					      <div className="pull-right">
					        <h5>Logged In as Manoj</h5>
					        <a href="/">logout</a>
					      </div>
					    </div>
					</div>
				</div>
				
				);
		}
});
var ProjectForm = React.createClass({
		render:function(){
			var panelHeight={
				minHeight:300
			}
		return (
				<div className="col-lg-6 " style={{padding: 30 + 'px'}}>
				<div className="panel panel-default"  >
						<div className="panel-heading"><h4>Add New Projects</h4>
						</div>
						<div className="panel-body" style={panelHeight}>
						<form role="form" className="form-horizontal">
						    <div className="form-group">
						      <label className="col-sm-3" >Project Name</label>
						      <div className="col-sm-9"><input type="text" className="form-control" ref="projectName" placeholder="Project Name" /></div>
						    </div>					   
							    <div className="form-group">
							      <label className="col-sm-4">Project Collaborators</label>
							      <div className="col-sm-8"><select multiple className="form-control">
															  <option>Tom</option>
															  <option>Dic</option>
															  <option>Harry</option>
															  <option>Peter</option>
															  <option>Eric</option>
															  <option>Sam</option>
															</select>
								  </div>
							    </div>
							    <div style={{height: 70 + 'px'}} ></div>

							    <div className="form-group">
							      <div className="col-sm-6">
							        <button type="submit" className="btn btn-info btn-block pull-right">Add</button>
							      </div>
							      <div className="col-sm-6">
							        <button type="submit" className="btn btn-warning btn-block pull-left">Reset</button>
							      </div>
							    </div>
							  </form>
						</div>
					
				</div>
				</div>	
			);
	}
});
var Listproject = React.createClass({
		render:function(){			
				var panelHeig={
   				 'minHeight': 300,
    			'overflowY': scroll
			}
		return (
					<div className="col-lg-6" style={{padding: 30 + 'px'}}>
					<div className="panel panel-default">
						<div className="panel-heading"><h4>Active Projects</h4>
						</div>
							<div className="panel-body" style={panelHeig}>
							
								<ul className="list-group" >
							        <a href ='/'><li className="list-group-item">
							        <p className="pull-right">owner:tom</p>
							        <a href='/' >project Spartan</a>< br />

							        <small>last updated<cite>16:24</cite></small>
							        </li></a>
							       <li className="list-group-item">
							        <p className="pull-right">owner:tom</p>
							        <a href='/#projecttime' >project Spartan</a>< br />

							        <small>last updated<cite>16:24</cite></small>
							        </li>					        
							     </ul>
							
							</div>
					</div>
					</div>
		);
	}

});


var Main = React.createClass({
	render:function(){
		var jumboHeight={
						height: 555
						
			};
		return ( <div className="clearfix">
				<Upper />
					<div className="jumbotron" >
						<div className="row">
								<ProjectForm />
								<Listproject />
						</div>
					</div>
				</div>
			);
	}
});

module.exports =Main;