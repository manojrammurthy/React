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
var ProjectSummary = React.createClass({
		render:function(){			
				
		return (
					<div className="col-lg-12" style={{padding: 30 + 'px'}}>
					<div className="panel panel-default">
						<div className="panel-heading">
			                <h3 className="panel-title">Project Name</h3>
			            </div>
							<div className="panel-body" >
								<div className="well ">
									<div className="row">
									<p className="pull-right">(TOM ERIC SAM)</p>					
									</div>
									<div className="row">
											<div className="col-lg-6">
											<h3>Total TimeTracked:</h3>
											</div>
									<div className="col-lg-6 ">
											<div className="col-lg-8">
											<h3 className="pull-right">Last Updated:</h3>
											</div>
											<div className="col-lg-4">
											<h3 >12:45</h3>
											</div>
									</div>
									</div>
										<div className="row">
											<div className="col-lg-6">
												<button type="button" className="btn btn-default">Add Time</button>
											</div>
											<div className="col-lg-6 pull-right">
												<div className="col-lg-8 ">
												<button type="button" className="btn btn-default pull-right">Add Remove Collaborators</button>
												</div>
												<div className="col-lg-4 ">
												<button type="button" className="btn btn-default pull-right">Close Project</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							
					</div>
					</div>
		);
	}

});

var ProjectLog = React.createClass({
		render:function(){
			return (<div className="well">
					<div className="row">
						<div className="col-lg-4">
							<small>Task Name:spartan</small>
						</div>	
						<h5 className="pull-right">TOM</h5>		
					</div>
					<div className="row">
						<div className="col-lg-4">
						<small>Task:Description: created a wiki project </small>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3">
						<small >From:16:34</small>
						</div>
						<div className="col-lg-3 pull-left">
						<small>To:16:34</small>
						</div>
						<div className="col-lg-3 pull-left">
						<small >Last Updated:16:34</small>
						</div>
						<div className="col-lg-3 pull-right">
						<span className="pull-right">
						&nbsp;<a href='/' >Edit</a>&nbsp;
						</span>
						<span className="pull-right">
						&nbsp;<a href='/'className="">Remove</a>&nbsp;
						</span>
						</div>
					</div>
					</div>	
				);
		}
});

var ProjectTime = React.createClass({
		render:function(){
			var jumboHeight={
						height: 555
						
			};
			return (
					<div className="clearfix">
					<Upper />
							<div className="row">
							<ProjectSummary />
							</div>
							<div className=" jumbotron " style={{padding: 30 + 'px'}}>
							
							<ProjectLog />
							<ProjectLog />
							
							</div>
					</div>
				);
		}
});

module.exports =ProjectTime;