"use strict";

var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

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
	handleSubmit:function(){
		console.log('hi');
	},
	getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },
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
												<button type="button" className="btn btn-default"  onClick={this.open}>Add Time</button>
												
											</div>
											<div className="col-lg-6 pull-right">
												<div className="col-lg-8 ">
												<button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Add Remove Collaborators</button>
												</div>
												<div className="col-lg-4 ">
												<button type="button" className="btn btn-default pull-right">Close Project</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							
					</div>
					 <Modal show={this.state.showModal} onHide={this.close}>
				          <Modal.Header closeButton>
				            <Modal.Title>Add Time for project spartan</Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
				         <form role="form" className="form-horizontal">
						    <div className="form-group">
						      <label className="col-sm-3" >Project Name</label>
						      <div className="col-sm-9"><input type="text" className="form-control" ref="projectName" placeholder="Project Name" /></div>
						    </div>					   
							    
							    <div style={{height: 70 + 'px'}} >
							    <label className="col-sm-3" >Task Description</label>
						      <div className="col-sm-9"><textarea  className="form-control" ref="projectName" placeholder="Project Name" /></div>
							    </div>

							    <div className="form-group">
							      <div className="col-sm-6">
							      <label className="col-sm-3" >From-Time</label>
							        <input type="datetime-local" className="form-control" ref="fromtime"  />
							      </div>
							      <div className="col-sm-6">
							      <label className="col-sm-3" >To-Time</label>
							       <input type="datetime-local" className="form-control" ref="totime"  />
							      </div>
							    </div>
							  </form>		            
					          </Modal.Body>
					          <Modal.Footer>
					          <button type="submit" className="btn btn-success pull-left">Submit</button>
					            <Button onClick={this.close}>Cancel</Button>
					          </Modal.Footer>
					        </Modal>
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