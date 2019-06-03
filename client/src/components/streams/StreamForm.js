import React from 'react';
import{Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component{
	renderError({error,touched}){
		if(touched && error){
			return(
				<div className="ui error message" >
					<div className="header">{error}</div>
				</div>	
				);
		}

	}

	renderInput=({input,label,meta})=>{
		const className=`field ${meta.error && meta.touched ? 'error':''}`
		return (
			<div className={className}>
			<label>{label}</label>
			<input {...input} autoComplete="off"/>
			{this.renderError(meta)}
			</div>
			);
		
	}
	onSubmit=(formValues)=>{
		this.props.onSubmit(formValues);
	}

	render(){
		return(
		 <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit) }>
		 	<Field name="title" component={this.renderInput } label="Enter Title" />
		 	<Field name="description" component={this.renderInput} label="Enter Description" />

		 	<button className="ui button secondary"> Submit</button>
		 
		 </form>
		);
	}
}

const validate = (formValues)=>{
	const errors={};

	if(!formValues.title){
		errors.title='You must enter a title';
	}

	if (!formValues.description){
		errors.description='You must enter a descriptopn';
	}
	return errors;
};


//export default connect()(reduxForm({
//	form: 'StreamCreate',
//	validate
//}) (StreamCreate));

export default reduxForm({
	form:'StreamForm',
	validate
})(StreamForm);

