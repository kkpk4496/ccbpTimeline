import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={each.id} projectDetails={each} />
    }
    return <CourseTimelineCard key={each.id} courseDetails={each} />
  }
  return (
    <div className="main-container">
      <h1 className="heading1">
        MY JOURNEY OF
        <span className="heading2">
          <br />
          CCBP 4.0
        </span>
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: '#ffffff', titleColor: '#0967d2'}}
        >
          {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
