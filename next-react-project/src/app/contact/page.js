export default function Page() {
  return (
    <main className="max-w-md mx-auto p-6 bg-slate-400 shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact us!</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
          id="email"
          type="email"
          name="email"
          required></input>
        </div>
        <div>
          <label htmlFor="message">Message </label>
          <textarea
          id="message"
          name="message"
          required
          rows={4}
          ></textarea>
          <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}
