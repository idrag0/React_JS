
function Collegess({ clg }) {   /// leccture = > 26
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#db2e2eff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            maxWidth: '480px',
            margin: '12px auto'
        }}>
            <h2>Name : {clg?.name}</h2>
            <ul>
                <li>
                    <h3>City :{clg?.city}</h3>
                </li>
                <li>
                    <h3>Website :{clg?.website}</h3>
                </li>
            </ul>
        </div>
    )
}

export default Collegess;