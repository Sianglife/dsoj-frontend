import { Card, Table } from "react-bootstrap"
import axios from "axios"
import { genFullUrl } from "@/constant"
import consts from "@/constant"
import { IProblemListItem } from "@/interface/IProblem"
import { useEffect, useState } from "react"

function genTableElement(index: number, args: IProblemListItem) {
    console.log(index);
    console.log(args);
    return (
        <tr>
            <td className="pl-4" style={{ color: "var(--bs-gray-dark)" }}>
                <span>{index}</span>
            </td>

            <td>
                <a href="#" style={{ fontSize: "1.25rem", textDecoration: "none", color: "rgb(0,0,0)", fontWeight: "bold" }}><span style={{ fontWeight: "normal !important" }}>{args.title}</span></a></td>
            <td>
                <span className="text-muted">{args.accessed / args.challenged}</span>
            </td>
            <td style={{ color: "#e5053a" }}>
                <strong>{args.difficulty}</strong>
            </td>
            <td>
                <span>{args.tags.toString()}</span>
            </td>
        </tr>
    )
}

export default function Problem() {
    const [ListData, setListData] = useState<IProblemListItem[]>([])
    const [TableElement, setTableElement] = useState<JSX.Element[]>([])

    function TableContent() {
        return (
            <tbody>
                {TableElement}
            </tbody>
        )
    }

    function getListData() {
        axios.get(genFullUrl(consts.path.Problem.List))
            .then((res) => {
                setListData(res.data);
            })
        setInterval(getListData, 5000)
    }

    // TODO: fix the bug that the update will run into a infinite loop
    getListData();
    useEffect(() => {
        setTableElement(ListData.map((value, index) => genTableElement(index, value)))
    }, ListData)

    return (
        <Card>
            <Card.Title className="text-uppercase card-title mb-0" style={{ marginTop: "1rem", marginBottom: "1rem!important" }}>
                problems
            </Card.Title>

            <input type="search" style={{
                background: "url(&quot;https://icons.getbootstrap.com/assets/icons/search.svg&quot;) 8px no-repeat, var(--bs-gray-200)",
                paddingLeft: "calc(1.4rem + 8px)",
                borderStyle: "none",
                borderRadius: "5px",
                width: "15rem"
            }} placeholder="Search titles or tags" />

            <Table>
                <thead>
                    <tr>
                        <th className="text-uppercase border-0 font-medium pl-4" scope="col" style={{ width: "2rem" }}>#</th>
                        <th className="text-uppercase border-0 font-medium" scope="col">Name</th>
                        <th className="text-uppercase border-0 font-medium" scope="col" style={{ width: "7rem" }}>Acceptance</th>
                        <th className="text-uppercase border-0 font-medium" scope="col" style={{ width: "7rem" }}>Difficulty</th>
                        <th className="text-uppercase border-0 font-medium" scope="col" style={{ width: "10rem" }}>Tags</th>
                    </tr>
                </thead>
                <TableContent />
            </Table>
        </Card>
    )
}