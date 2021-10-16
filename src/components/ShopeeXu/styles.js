const styles = (theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        color: '#f6a700',
        borderBottom: '1px solid #ddd',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
        },
        '& img': {
            width: '50px',
        }
    },
    currentXu: {
        fontSize: '32px',
        margin: '0 18px',
    },
    body: {
        '& > div': {
            textAlign: 'center',
            color: '#333',
            margin: '100px auto'
        }
    },
    btnPrimarry: {
        marginTop: '20px'
    }
})

export default styles
