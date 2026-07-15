// A "course" (e.g. Digital Skills) is not tied to one class, so it is reached
// directly from Class Selection with classId === subjectId, skipping Subject
// Selection. Breadcrumbs omit the "Class X" crumb in that case.
export function isCourseMode(classId, subjectId) {
  return classId === subjectId
}

export function buildBreadcrumb({ classId, subjectId, subjectLabel, chapterLabel, topicLabel }) {
  const course = isCourseMode(classId, subjectId)
  const items = [{ label: 'Home', to: '/' }]

  if (!course) {
    items.push({ label: `Class ${classId}`, to: '/class' })
  }

  items.push({
    label: subjectLabel,
    to: course ? '/class' : `/class/${classId}/subject`,
  })

  if (chapterLabel !== undefined) {
    items.push({
      label: chapterLabel,
      to: `/class/${classId}/subject/${subjectId}/chapter`,
    })
  }

  if (topicLabel !== undefined) {
    items.push({ label: topicLabel, to: undefined })
  }

  return items
}
