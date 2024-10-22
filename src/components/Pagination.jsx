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

        <ul className=' pagination my-8 flex-wrap gap-4 text-whitex  '>
            <li>
                <button onClick={()=> onPageChange(currentPage -1)} disabled={currentPage===1} className='text-whitex'>Previous</button>
            </li>
            <div className='flex gap-1'>{renderPaginationLinks()}</div>
            <li>
                <button onClick={()=> onPageChange(currentPage +1)} disabled={currentPage===totalPage}  className='text-whitex'>Next</button>
            </li>
        </ul>
        
    </div>
  )
}

export default Pagination