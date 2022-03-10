
const memberList = [
    {id: 1, name: "김갑돌", birth: '1990-01-02'},
    {id: 2, name: "김삼순", birth: '1991-03-01'}
]

const getMemberList = (req, res) => {
    res.send(memberList)
}

const getMemberById = (req, res) => {
    const id = parseInt(req.params.id)
    const result = memberList.filter(member => member.id === id)
    res.send(result);
}


module.exports = {getMemberList, getMemberById}