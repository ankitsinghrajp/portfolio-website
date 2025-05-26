import projects from '@/data/project.json';


const Page = async ({params}) => {
    const {id} = await params;
    
    const project = projects.find((p)=> p.id === Number(id));
    
    if(!project){
        return<>
        Project not found!
        </>
    }
  return (
    <div>
        {/* Hero Section */}
        <section>
            
        </section>
    </div>
  )
}

export default Page