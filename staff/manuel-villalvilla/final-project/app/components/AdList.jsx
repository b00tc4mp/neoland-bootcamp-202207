export default function AdList({ currentItems }) {
    return <ul className="results-list">
    {currentItems.map(ad => {
      return <li key={ad._id}>{ad.title + ' ' + ad.body + ' ' + ad.country}</li>
    })}
  </ul>


}