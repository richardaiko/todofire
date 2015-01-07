import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});