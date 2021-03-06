
Meteor.publish('userTasks', function() {
	return Tasks.find({
		user : this.userId
	});
});

Meteor.publish('userProjects', function() {
	return Projects.find({
		user : this.userId
	});
});

Meteor.publish('taskTimes', function() {
	return TaskTimes.find({
		user : this.userId
	});
});

Meteor.publish('userSettings', function() {
	return Settings.find({
		user : this.userId
	});
});

Meteor.publish('currentUserTask', function() {
	return CurrentUserTask.find({
		user : this.userId
	});
});

Meteor.publish('todos', function() {
	//find todos.
	return Todos.find();
});

Meteor.methods({
	allTasksCount : function() {
		return Tasks.find().count();
	}
});

Meteor.startup(function () {
    // code to run on server at startup
    Accounts.config({
      forbidClientAccountCreation : false
    });
});
