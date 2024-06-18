import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

describe("Hero", () => {
    it("renders the avatar of john doe", () => {
        render(<Hero />)
        const avatar = screen.getByRole("img");
        expect(avatar).toBeInTheDocument();
        screen.logTestingPlaygroundURL();
        expect(avatar).toHaveAttribute("alt", "my avatar")
    })
    it("renders a paragraph with the text 'hello, i am'", () => {
        render(<Hero />)
        const paragraph = screen.getByText(/hello, i am/i)
        expect(paragraph).toBeInTheDocument()
    })
    it("renders a heading with the text '{john doe}'", () => {
        render(<Hero />)
        const heading = screen.getByRole('heading', { name: /\{john doe\}/i });
        expect(heading).toBeInTheDocument()
    })
    it("renders a paragraph with the text 'I am a full-stack developer'", () => {
        render(<Hero />)
        const para = screen.getByText(/i am a full\-stack web developer/i);
        expect(para).toBeInTheDocument()
    })
})