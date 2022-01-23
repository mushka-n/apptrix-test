import React from "react";
import { useNavigate } from "react-router-dom";

import Doc from "../PdfContainer/DocService";
import PdfContainer from "../PdfContainer/PdfContainer";

import "./table.css";

const Table = ({ arr, cols }) => {
    const navigate = useNavigate();

    const getValueFromObj = (obj, layers) => {
        let currLayer;
        layers.forEach((l) => {
            if (layers.indexOf(l) === 0) currLayer = obj[l];
            else currLayer = currLayer[l];
        });
        return currLayer;
    };

    const processTableItem = (a, c) => {
        if (c.isLink) return processTableItemLink(a, c);

        let value = a[c.key];
        if (!value) value = getValueFromObj(a, c.key.split("."));
        if (c.processData) value = c.processData(value);
        return <div className={c.className}>{value}</div>;
    };

    const processTableItemLink = (a, c) => {
        let href = c.href;
        const keys = Array.from(href.matchAll(/\[([^\][]*)]/g), (x) => x[1]);

        keys.forEach((k) => {
            href = href.replace(`[${k}]`, a[k]);
        });

        return (
            <div className={c.className} onClick={() => navigate(href)}>
                {c.text}
            </div>
        );
    };

    return (
        <div>
            <PdfContainer createPdf={(html) => Doc.createPdf(html)}>
                <div id="divToPrint" className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow-md sm:rounded-lg">
                                <table className="min-w-full">
                                    <thead className="table-head">
                                        <tr>
                                            {cols.map((c) => (
                                                <th
                                                    key={c.head}
                                                    scope="col"
                                                    className="table-head-text"
                                                >
                                                    {c.head}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arr.map((a) => (
                                            <tr
                                                key={a.id}
                                                className="table-body-row"
                                            >
                                                {cols.map((c) => (
                                                    <td key={c.head}>
                                                        {processTableItem(a, c)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </PdfContainer>
        </div>
    );
};

export default Table;
