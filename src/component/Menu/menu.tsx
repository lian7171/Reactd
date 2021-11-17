import React, {ReactNode} from "react";
import classNames from 'classnames'


type MenuMode = 'horizontal'|'vertical'
export interface MenuProps {
    defaultIndex ?: number,
    className ?: string,
    style ?: React.CSSProperties,
    mode ?:MenuMode,
    onSelect ?: (selectedIndex:number)=>void,
    children ?: ReactNode
}


const Menu:React.FC<MenuProps> =  (props) => {

    const {defaultIndex, className, style, mode,children} = props
    const classes = classNames('menu',className,{
        'menu-vertical': mode === 'vertical'
    })

    return (
        <ul className={classes} style={style}>{children}</ul>

    )

}

Menu.defaultProps = {
    defaultIndex : 0,
    mode: "horizontal"
}

export default Menu