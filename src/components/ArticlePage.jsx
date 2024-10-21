import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
import CategorySelecetion from './CategorySelecetion';

const ArticlePage = () => {

    const[article,setArticle]=useState([]);
    const[currentPage,setCurrentPage] = useState(1); //for pagination Item
    const pageSize = 12; //number of article per page
    const[selectedCategory,setSelectedCategory] = useState(null);
    const [activeCategory,setActiveCategory] = useState(null);


    useEffect(()=>{
        async function fetchArticle() {
         let url =`https://json-server-pi-peach.vercel.app/blogs?page=${currentPage}&limit=${pageSize}`;

         //filter by category
         if(selectedCategory){
          url+=`&category${selectedCategory}`;
         }

         const response = await fetch(url);
         const data = await response.json();
         console.log(data)
         setArticle(data);
          
        }
        fetchArticle();
    },[currentPage,pageSize,selectedCategory]);

    // page changing btn

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) =>{
          setSelectedCategory(category);
          setCurrentPage(1);
          setActiveCategory(category);
    }

  return (
    <div>
        {/* category section */}
        <div>
          <CategorySelecetion onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
        </div>
        {/* article card section */}
        <div>
          <ArticleCard article={article} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

        </div>

        
        {/* pagination */}
        <div>
          <Pagination  onPageChange={handlePageChange} currentPage={currentPage} article={article} pageSize={pageSize}/>
        </div>
     
    </div>
  )
}

export default ArticlePage