import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'



class Directory extends React.Component{
    constructor(){
        super();
        
        this.state={
            sections:[
                    {            
                        title: 'Books',
                        imageUrl: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',
                        id: 1,
                        linkUrl: 'shop/hats'
                    },
                    {
                        title: 'Painting',
                        imageUrl: 'https://i.pinimg.com/originals/bb/55/66/bb5566c14a95f1897b1e258e0fcb69fe.jpg',
                        id: 2,
                        linkUrl: 'shop/jackets'
                    },
                    {
                        title: 'Handcraft',
                        imageUrl: 'https://i.etsystatic.com/5562980/r/il/899578/1520888468/il_570xN.1520888468_1bqb.jpg',
                        id: 3,
                        linkUrl: 'shop/sneakers'
                    },
                    {
                        title: 'Clothing',
                        imageUrl: 'https://cdn11.bigcommerce.com/s-hlxuc6bu/images/stencil/1280x1280/products/1551/9833/HTB1Du8WJXXXXXa4XXXXq6xXFXXXd__47943.1458786361.jpg?c=2',
                        size: 'large',
                        id: 4,
                        linkUrl: 'shop/womens'
                    },
                    {
                        title: 'Others',
                        imageUrl: 'https://artmodel.files.wordpress.com/2013/01/img_5560.jpg',
                        size: 'large',
                        id: 5,
                        linkUrl: 'shop/mens'
                    }]

        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size })=>(
                        <MenuItem  keytitle={id} title={title} imageUrl={imageUrl} size={size}/>  
                    ))
                }
            </div>

        )
    }
}


export default Directory;