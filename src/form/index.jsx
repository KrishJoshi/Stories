import React, {Component} from 'react';
import { Formik } from 'formik';
import firebaseConf from '../config/firebase';
class Form extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="header-h">Share your story</h1>
                <p className="header-p">We would like to know how you feel</p>
              </div>
            </div>
            <div className="row msg-row">
              <div className="msg-row-form">
                <Formik
                  initialValues={{ heading: '', name: '', story: '', title: '', subtitle: '' }}
                  validate={values => {
                    let errors = {};
                    if (!values.name) {
                      errors.name = 'Required';
                    } else if(!values.heading){
                      errors.heading = 'Required';
                    }else if(!values.title){
                      errors.title = 'Required';
                    }else if(!values.subtitle){
                      errors.subtitle = 'Required';
                    } else if(!values.story){
                      errors.story = 'Required';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const toSave = {...values, created: new Date().toISOString(), published: false};
                    firebaseConf.database().ref().child('stories').push(toSave).then(()=> setSubmitting(false));
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    submitCount,
                  }) => (<div>
                      {!!submitCount &&  <div id="sendmessage">Your booking request has been sent. Thank you!</div>}
                      {!submitCount && <form onSubmit={handleSubmit}>
                        <div className="col-md-12 col-sm-12 contact-form pad-form">
                          <div className="form-group label-floating is-empty">
                            <input type="text" name="name" className="form-control" id="name"
                                   onChange={handleChange} onBlur={handleBlur}
                                   value={values.name} placeholder="Your Name" />
                            {errors.name && touched.name &&
                            <div className="validation">{errors.name}</div>}
                          </div>
  
                          <div className="form-group label-floating is-empty">
                            <input type="text" name="title" className="form-control" id="title"
                                   onChange={handleChange} onBlur={handleBlur}
                                   value={values.title} placeholder="Story's Title" />
                            {errors.title && touched.title &&
                            <div className="validation">{errors.title}</div>}
                          </div>
  
                          <div className="form-group label-floating is-empty">
                            <input type="text" name="subtitle" className="form-control" id="subtitle"
                                   onChange={handleChange} onBlur={handleBlur}
                                   value={values.subtitle} placeholder="Story's Subtitle" />
                            {errors.subtitle && touched.subtitle &&
                            <div className="validation">{errors.subtitle}</div>}
                          </div>
                          
                          <div className="form-group label-floating is-empty">
                            <input type="text" name="heading" className="form-control" id="heading"
                                   onChange={handleChange} onBlur={handleBlur}
                                   value={values.heading} placeholder="Story's Heading" />
                            {errors.heading && touched.heading &&
                            <div className="validation">{errors.heading}</div>}
                          </div>
                        </div>
                        <div className="col-md-12 contact-form">
                          <div className="form-group label-floating is-empty">
                            <textarea className="form-control" name="story" rows="20"
                                      onChange={handleChange} onBlur={handleBlur}
                                      value={values.story} placeholder="Story"/>
                            {errors.story && touched.story &&
                            <div className="validation">{errors.story}</div>}
                          </div>
                        </div>
                        <div className="col-md-12 btnpad">
                          <div className="contacts-btn-pad">
                            <button type="submit" className="contacts-btn" disabled={isSubmitting}>Share Story</button>
                          </div>
                        </div>
                      </form>}
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
