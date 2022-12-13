import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookImage = this.onChangeBookImage.bind(this);
        
        this.state = {
            title:'',
            cover:'',
            author:'',
            image:''
        }
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            cb(reader.result)
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author},
        ${this.state.image}`);

        const book ={
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author,
            image:this.state.image
        }

        axios.post('http://localhost:4000/api/books',book)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            author:'',
            image:''
        })
    }

    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    onChangeBookImage(e){
        let files = e.target.files;

         this.getBase64(files[0], (result) => {
                this.state.image = result;
              })
    }

    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Image: </label>
                        <input type="file"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeBookImage}
                        />
                    </div>

                    


                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}