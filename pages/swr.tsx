import { StudentDetail } from '@/components/swr';
import React, { useState } from 'react';

export default function SWRPage() {
    const [detailList, setDetailList] = useState([1, 2, 3])
    function handleAdd() {
        setDetailList(pre => [...pre, 1])
    }
    return (
        <div>
            <h1>SWR Playground</h1>
            <button onClick={handleAdd}>Add item</button>
            <ul>
                {detailList.map((item, index) => (
                    <li key={index}><StudentDetail studentId='lea11ziflg8xoizb' /></li>
                ))}

            </ul>
        </div>
    );
}
