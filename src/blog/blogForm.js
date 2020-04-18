import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../js/actions/index';
import { Button, Header, Form, Modal, Icon } from 'semantic-ui-react'
function mapDispatchToProps(dispatch) {
    return {
        addArticle: (article) => {
            dispatch(addArticle(article))
        }
    }
}

class ConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            category: "",
            visibility: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title, content, category } = this.state;
        this.props.addArticle({ title, content, category })
        this.setState(() => {
            return {title: "",content: "",category: "", visibility: false}
        })
    }
    handleOpen() {
        this.setState({visibility: true})
    }
    handleClose() {
        this.setState({visibility: false})
    }
    render() {
        const { title, content, category } = this.state
        return (
            <Modal trigger={<Button color="red" onClick={() =>{this.handleOpen()}}><Icon name="pencil alternate"/> Write an Article</Button>} open={this.state.visibility}>
                <Header>Write an Article</Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={title} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="content">Content</label>
                            <textarea id="content" value={content} onChange={this.handleChange}></textarea>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="Category">Category</label>
                            <input type="text" id="category" value={category} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type="submit" color="green">Save</Button>
                        <Button color="red" onClick={() => {this.handleClose()}}>Discard</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}
const BlogForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default BlogForm;