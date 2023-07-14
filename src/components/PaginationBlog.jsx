import './styles/PaginationBlog.css'
const PaginationBlog = ({numbersPage, setPage, CONTENT_PER_PAGE}) => {
  return (
    <ul className="pagination">
        {
            numbersPage(location, CONTENT_PER_PAGE)?.map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
    </ul>
  )
}

export default PaginationBlog