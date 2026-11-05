import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
    it("shows working links to the main pages", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("link", { name: "דף הבית" })
        ).toHaveAttribute("href", "/");

        expect(
            screen.getByRole("link", { name: "חוגים ואימונים בשחמט" })
        ).toHaveAttribute("href", "/classes");

        expect(
            screen.getByRole("link", { name: "הצטרפו אלינו" })
        ).toHaveAttribute("href", "/join");
    });

    it("opens and closes the mobile menu", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // The menu starts closed
        const openButton = screen.getByRole("button", {
            name: "פתיחת תפריט",
        });

        expect(openButton).toHaveAttribute("aria-expanded", "false");

        expect(
            screen.getAllByRole("link", { name: "הצטרפו אלינו" })
        ).toHaveLength(1);

        // Open the mobile menu
        fireEvent.click(openButton);

        const closeButton = screen.getByRole("button", {
            name: "סגירת תפריט",
        });

        expect(closeButton).toHaveAttribute("aria-expanded", "true");

        expect(
            screen.getAllByRole("link", { name: "הצטרפו אלינו" })
        ).toHaveLength(2);

        // Close the mobile menu
        fireEvent.click(closeButton);

        expect(
            screen.getByRole("button", { name: "פתיחת תפריט" })
        ).toHaveAttribute("aria-expanded", "false");

        expect(
            screen.getAllByRole("link", { name: "הצטרפו אלינו" })
        ).toHaveLength(1);
    });
});