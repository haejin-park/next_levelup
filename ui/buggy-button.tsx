// 클릭 시 의도적으로 에러 발생시키는 버튼 컴포넌트
'use client';

import React from "react";
import Button from "@/ui/button";

export default function BuggyButton() {
    const [clicked, setClicked] = React.useState(false);
    if(clicked) { throw new Error('문제가 발생했습니다.');}
    return ( 
        <Button kind="error" onClick={() => {setClicked(true);}}>
            강제로 에러 발생 시키기
        </Button>
    )
}