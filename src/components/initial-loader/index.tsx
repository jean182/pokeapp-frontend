import ContentLoader from 'react-content-loader'

export default function PokedexPlaceholder() {
  return (
    <div className="row">
       {Array.from(Array(20).keys()).map((item) => (
        <div className="col-sm-3" key={item}>
          <ContentLoader
            viewBox="0 0 100 100"
          >
            <rect x="16" y="17" rx="0" ry="0" width="260" height="100" />
            <circle cx="35" cy="148" r="10" />
            <rect x="69" y="229" rx="2" ry="2" width="175" height="15" />
            <rect x="69" y="253" rx="2" ry="2" width="40" height="15" />
          </ContentLoader>
        </div>
       ))}
    </div>
  )
}