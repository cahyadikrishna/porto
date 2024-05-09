import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  techstack: string[]
}

export default function ListProject() {
  const [projects, setProjects] = useState<Project[]>()

  async function getProjects() {
    const querySnapshot = await getDocs(collection(db, 'project'))
    const projectPayload = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      techstack: doc.data().techstack,
    }))
    setProjects(projectPayload)
    console.log(projectPayload)
  }

  useEffect(() => {
    getProjects()
  }, [])
  return (
    <div>
      {projects?.map((x) => (
        <div key={x.id}>
          <p>{x.title}</p>
          <p>{x.description}</p>
          <p>{x.techstack}</p>
        </div>
      ))}
      ListProject
    </div>
  )
}
