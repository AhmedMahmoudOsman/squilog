import React from 'react'



const Pagination = ({onPageChange,currentPage,article,pageSize}) => {

    const totalPage = Math.ceil(article.length /pageSize);
    const renderPaginationLinks= () =>{
        return Array.from({length:totalPage},(_, i) => i +1).map((pageNumber) =>(
            <li className={pageNumber === currentPage ?"activePagination":""} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <div>

        <ul>
            <li>
                <button onClick={()=> onPageChange(currentPage -1)} className='text-whitex'>Previous</button>
            </li>
            <div>{renderPaginationLinks()}</div>
            <li>
                <button className='text-whitex'>Next</button>
            </li>
        </ul>
        
    </div>
  )
}

export default Pagination