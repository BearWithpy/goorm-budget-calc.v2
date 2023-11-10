import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
// import { act } from "react-dom/test-utils"

describe("App", () => {
    test("renders App component", () => {
        render(<App />)
        expect(screen.getByText(/total/i)).toBeInTheDocument()
    })

    test("shows message when adding an item", async () => {
        render(<App />)
        userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }))

        await waitFor(() => {
            expect(screen.getByText(/아이템이 생성됨/i)).toBeInTheDocument()
        })
    })

    // test("updates total when a new item is added", async () => {
    //     render(<App />)
    //     const addButton = screen.getByRole("button", { name: /SUBMIT/i })
    //     fireEvent.click(addButton)
    //     const expenseInput = screen.getByLabelText(/expense/i)
    //     userEvent.type(expenseInput, "50")
    //     fireEvent.click(addButton)
    //     await waitFor(() => {
    //         expect(screen.getByText("Total: 50")).toBeInTheDocument()
    //     })
    // })

    // test("allows items to be edited", async () => {
    //     render(<App />)
    //     const editButtons = screen.getAllByRole("button", { name: /edit/i })
    //     userEvent.click(editButtons[0])
    //     const editInput = screen.getByLabelText(/edit item/i)
    //     userEvent.clear(editInput)
    //     userEvent.type(editInput, "Edited Product")
    //     const saveButton = screen.getByRole("button", { name: /save/i })
    //     userEvent.click(saveButton)
    //     await waitFor(() => {
    //         expect(screen.getByText(/edited product/i)).toBeInTheDocument()
    //     })
    // })

    // test("allows items to be deleted", async () => {
    //     render(<App />)
    //     const deleteButtons = screen.getAllByRole("button", { name: /delete/i })
    //     userEvent.click(deleteButtons[0])
    //     await waitFor(() => {
    //         expect(screen.queryByText(/item name/i)).not.toBeInTheDocument()
    //     })
    // })

    // test("can delete all items", async () => {
    //     render(<App />)
    //     const deleteAllButton = screen.getByRole("button", {
    //         name: /delete all/i,
    //     })
    //     userEvent.click(deleteAllButton)
    //     await waitFor(() => {
    //         expect(screen.queryByTestId("items-list")).toBeEmptyDOMElement()
    //     })
    // })
})
