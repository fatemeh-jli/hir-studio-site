import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

// helpers
const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  // INIT + SYNC
  useEffect(() => {
    setItems(getCart());

    const sync = () => {
      setItems(getCart());
    };

    window.addEventListener("cart_updated", sync);
    window.addEventListener("storage", sync); // multi-tab support

    return () => {
      window.removeEventListener("cart_updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // TOTAL
  const total = items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  // UPDATE QTY
  const updateQty = (id: number, delta: number) => {
    const updated = items.map((i) =>
      i.id === id
        ? { ...i, qty: Math.max(1, i.qty + delta) }
        : i
    );

    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart_updated"));
  };

  // REMOVE
  const removeItem = (id: number) => {
    const updated = items.filter((i) => i.id !== id);

    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart_updated"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-24">

      {/* TOP BAR */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-12">

        <h1 className="font-serif text-5xl text-ink">
          آیتم‌های <span className="text-accent">انتخاب‌شده</span>
        </h1>

        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-ink transition"
        >
          ← ادامه خرید
        </Link>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-6">

          {items.length === 0 && (
            <div className="text-muted-foreground border border-border p-10 rounded-xl bg-card">
              هنوز آیتمی انتخاب نشده
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center
                         bg-card border border-border
                         p-5 rounded-xl
                         hover:border-accent/40 transition"
            >

              {/* LEFT */}
              <div className="flex gap-4 items-center">

                <img
                  src={item.image}
                  className="w-16 h-16 rounded-md object-cover border border-border/60"
                />

                <div className="space-y-2">

                  <h2 className="font-serif text-xl text-ink">
                    {item.name}
                  </h2>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-6 h-6 text-xs text-muted-foreground hover:text-ink transition"
                    >
                      −
                    </button>

                    <span className="text-xs text-ink w-5 text-center font-medium">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-6 h-6 text-xs text-muted-foreground hover:text-ink transition"
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right flex flex-col items-end gap-2">

                <p className="text-ink font-medium">
                  {(item.price * item.qty).toLocaleString("fa-IR")} تومان
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[10px] text-muted-foreground
                             opacity-50 hover:opacity-100
                             hover:text-red-500 transition"
                >
                  حذف
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="sticky top-10 h-fit border border-border
                        bg-secondary p-7 rounded-xl">

          <h3 className="font-serif text-xl mb-6 text-ink">
            مجموع
          </h3>

          <div className="flex justify-between text-sm mb-6">
            <span className="text-muted-foreground">قابل پرداخت</span>
            <span className="text-ink font-medium">
              {total.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <Link to="/checkout">
            <button
              className="w-full flex items-center justify-center gap-2
                         bg-ink text-ivory py-4 rounded-lg
                         hover:bg-ink/90 transition"
            >
              <span className="text-sm font-medium">پرداخت</span>
            </button>
          </Link>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            مرحله بعد: تکمیل اطلاعات ارسال
          </p>

        </div>
      </div>
    </div>
  );
}