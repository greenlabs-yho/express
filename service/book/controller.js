// db 연결 전 임시로 사용할 data object
const bookList = [
    {id: 1, name: "그 많던 싱아는 누가 다 먹었을까?"},
    {id: 2, name: "규칙 없음"},
    {id: 3, name: "나는 매주 시체를 보러간다."}
]


const getBookList = (req, res) => {
    res.send(bookList);
}


const getBookById = (req, res) => {
    const id = parseInt(req.params.id);
    const result = bookList.filter((book) => book.id === id);
    res.send(result);
}

module.exports = {getBookList, getBookById}