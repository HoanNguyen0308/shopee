const styles = (theme) => ({
    productDetail: {
        backgroundColor: theme.color.bgColor,
        paddingBottom: '20px',
    },
    breadCrumb: {
        padding: '16px 0',
        '& ol': {
            display: 'flex',
            flexWrap: 'nowrap',
            flexShrink: '0',
            fontSize: '14px',
            color: '#000000CC',
            '& li': {
                whiteSpace: 'nowrap',
            },
            '& li:last-child': {
                whiteSpace: 'normal',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '1', 
            }
        },
        '& a': {
            textDecoration: "none",
            color: '#0055aa',
            fontSize: '14px'
        },
        '& span': {
            fontSize: '14px',
            
        },
    },
})

export default styles
