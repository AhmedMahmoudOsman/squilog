import React from 'react'

const CategorySelecetion = ({onSelectCategory,activeCategory}) => {

    const category = ["Startups","AI","Health","Work"];

  return (
    <div className='mt-40 px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-white font-bold text-lg'>
        <button  onClick={()=>onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "":"active-button"} text-white font-bold text-lg`}>All</button>
        {
            category.map((category)=>(

                <button
                onClick={()=>onSelectCategory(category)}
                 className={`mr-2 space-x-16 ${activeCategory === category ? "active-button":""}`}
                 key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelecetion