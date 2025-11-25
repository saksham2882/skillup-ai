import WorkspaceProvider from "./Provider"

const WorkspaceLayout = ({children}) => {
  return (
    <WorkspaceProvider>
        {children}
    </WorkspaceProvider>
  )
}
export default WorkspaceLayout