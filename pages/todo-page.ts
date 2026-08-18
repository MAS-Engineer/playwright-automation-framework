import type {
  Locator,
  Page
} from "@playwright/test";

export class TodoPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly todoInput: Locator;
  readonly todoTitles: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading =
      page.getByRole("heading", { name: "todos" });

    this.todoInput =
      page.getByPlaceholder("What needs to be done?");

    this.todoTitles =
      page.getByTestId("todo-title");
  }

  async goto(): Promise<void> {
    await this.page.goto("/todomvc/#/");
  }

  async addTodo(title: string): Promise<void> {
    await this.todoInput.fill(title);
    await this.todoInput.press("Enter");
  }
  todoItem(title: string): Locator {
  return this.page
    .getByTestId("todo-item")
    .filter({ hasText: title });
  }

  async completeTodo(title: string): Promise<void> {
  await this.todoItem(title)
    .getByRole("checkbox")
    .check();
  }

  async deleteTodo(title: string): Promise<void> {
  const todo = this.todoItem(title);

  await todo.hover();
  await todo.getByLabel("Delete").click();
}
}