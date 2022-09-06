import AdList from "./AdList";
import ReactPaginate from 'react-paginate'

function PaginatedItems({ data, handlePageClick }) {
    return (
        <>
            <AdList currentItems={data.ads} />
            <ReactPaginate
                previousLabel={'Anterior'}
                nextLabel={'Siguiente'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                pageClassName={'pagination-page'}
                nextClassName={'pagination-page'}
                previousClassName={'pagination-page'}

                initialPage={data.currentPage - 1}
                pageCount={data.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                disableInitialCallback={true}
                renderOnZeroPageCount={null}
            />
            
        </>
    );
}

export default PaginatedItems