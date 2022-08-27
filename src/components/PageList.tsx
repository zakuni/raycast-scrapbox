import { ActionPanel, List, Action } from "@raycast/api";

export function PageList (props: {
  project: string,
  pages?: [];
}) {
  const { project, pages } = props;

  return (
    <List isLoading={!pages}>
      {pages?.map((page: any) => (
        <List.Item
          key={page.id}
          icon="list-icon.png"
          title={page.title}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={encodeURI(`https://scrapbox.io/${project}/${page.title}`)}></Action.OpenInBrowser>
            </ActionPanel>
          }
        />
      ))}
    </List>
  )
}
