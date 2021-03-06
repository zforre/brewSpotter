import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../containers/App.css';
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL

class GroupUpdate extends Component {
      constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            description: '',
            image: null,
            is_public: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
      }

      componentDidMount() {
        const options = {
          headers: {
            'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).key}`,
          }
        }
  
        const { id } = this.props.match.params
  
        axios.get(`/api/v1/${id}/`, options)
        .then((res) => {
            // console.log('res', res);
            this.setState(res.data)
        })
        .catch(error => {
            console.log('error', error);
        })
      }

      handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }
    
      handleImage(e) {
        console.log(e.target.files);
        let file = e.target.files[0];
        this.setState({image: file});
        // let reader = new FileReader();
        // reader.onloadend = () => this.setState({image: reader.result});
        // reader.readAsDataURL(file);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        // console.log(this.state)
    
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);
        formData.append('is_public', false);

        console.log(this.state);
        // axios.post('api/v1/', formData);

        const { id } = this.props.match.params
    
        axios.put(`${BASE_URL}/api/v1/${id}/`, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
    
          console.log(res);
          this.props.history.push('/profile/user');
        })
        .catch(error => {
    
          console.log(error);
        })
      }

    render() {
        return(
            <div className="d-flex justify-content-center mt-5">
                <Form onSubmit={this.handleSubmit} className="justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' value={this.state.title} onChange={this.handleChange} placeholder="Name of the Collection" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name='description' value={this.state.description} onChange={this.handleChange} rows="3" placeholder="Short description of the Collection" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Upload an Image</Form.Label>
                        <Form.Control type="file" name='image' onChange={this.handleImage}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Text className="text-muted" >
                        Make sure you update all fields before saving
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </div>
        )
    }
}

export default GroupUpdate