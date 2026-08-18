import {
  test,
  expect
} from "../fixtures/test-fixtures";

import { todoData } from "../test-data/todo-data";

test.describe("Todo application smoke tests", function () {
  test("loads the todo application", 
    {
      tag: ["@smoke", "@regression"]
    },
    async function ({
    todoPage
  }) {
    await expect(todoPage.heading).toBeVisible();
    await expect(todoPage.todoInput).toBeVisible();
  });

  test("adds a new todo item", 
    {
      tag: ["@smoke", "@regression"]
    },
    async function ({
    todoPage
  }) {
    await todoPage.addTodo(todoData.frameworkTodo);

    await expect(todoPage.todoTitles).toHaveText([
      todoData.frameworkTodo
    ]);
  });

  test("completes a todo item", 
    {
      tag: "@regression"
    },
    async function ({
    todoPage
  }) {
    await todoPage.addTodo(todoData.reviewTodo);
    await todoPage.completeTodo(todoData.reviewTodo);

    await expect(
      todoPage.todoItem(todoData.reviewTodo)
    ).toHaveClass(/completed/);
  });

 test(
  "deletes a todo item",
  {
    tag: "@regression"
  },
  async function ({ todoPage }) {
    await test.step("Create a todo item", async function () {
      await todoPage.addTodo(todoData.deleteTodo);

      await expect(
        todoPage.todoItem(todoData.deleteTodo)
      ).toHaveCount(1);
    });

    await test.step("Delete the todo item", async function () {
      await todoPage.deleteTodo(todoData.deleteTodo);
    });

    await test.step("Verify the item was deleted", async function () {
      await expect(
        todoPage.todoItem(todoData.deleteTodo)
      ).toHaveCount(0);
    });
  }
);

});