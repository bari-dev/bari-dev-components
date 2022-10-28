function Builder() {
  return (
    <>
      <bd-navbar
        title="test"
        color="black"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1eccef61-2e9d-4e1a-9481-5d7e21547651/d5mnvq2-394933b4-52a9-4f54-af2c-588ac80e4371.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlY2NlZjYxLTJlOWQtNGUxYS05NDgxLTVkN2UyMTU0NzY1MVwvZDVtbnZxMi0zOTQ5MzNiNC01MmE5LTRmNTQtYWYyYy01ODhhYzgwZTQzNzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OnDHFffcQgmo1Re6V9jHBfnw81jd77mJL47tqq2ptdU"
        buttons={[
          {"name": "test1", "color": "white", "href": "test"},
          {"name":"test2", "color": "white", "href": "test"}, 
          {"name":"test2", "color": "white", "href": "test"}
        ]}
        height="100"
        width="100"
      ></bd-navbar>

      </>
  );
}

export default Builder;
