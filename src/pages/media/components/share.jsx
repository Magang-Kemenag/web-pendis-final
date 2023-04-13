export default function Share() {
  return (
    <div className="share">
      <div className="text-2xl font-bold">Bagikan Postingan ini</div>
      <div className="flex gap-5 mt-6">
        <button>
          <img src="/assets/facebook-fill.svg" alt="" />
        </button>
        <button>
          <img src="/assets/twitter-fill.svg" alt="" />
        </button>
        <button>
          <img src="/assets/youtube-fill.svg" alt="" />
        </button>
        <button>
          <img src="/assets/instagram-fill.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
