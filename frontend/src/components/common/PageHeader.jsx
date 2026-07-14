import BackButton from './BackButton.jsx'
import Breadcrumb from './Breadcrumb.jsx'

function PageHeader({ backTo, breadcrumb, title }) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <BackButton to={backTo} />
        <Breadcrumb items={breadcrumb} />
      </div>
      <h1 className="text-projector-md font-extrabold text-primary text-center">{title}</h1>
    </div>
  )
}

export default PageHeader
