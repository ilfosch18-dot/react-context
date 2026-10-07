export default function Sidebar({handleReset}) {
    return (
        <aside className="w-25 px-4 border-end pt-5">
            <h4 className="h5">My App sidebar</h4>
            <button className="btn btn-secondary" onClick={handleReset}>Riporta alla normalità</button>
        </aside>
    );
}