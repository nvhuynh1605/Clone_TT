import { useEffect, useLayoutEffect, useState, memo } from "react"

function Content({ onIncrease }) {
    return (
        <div>
            <h1>Hello Guys</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(Content)