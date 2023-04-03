export default function VideoProfil() {
  return (
    <div className="p-12 flex flex-col gap-8 bg-white ">
      <div className="text-base-blue font-bold text-2xl">
        <div>Ditjen</div>
        <div>Pendidikan Islam</div>
      </div>
      <div className="text-ftitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo.
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_HRzmeYOtIc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="w-full  rounded-lg"
      ></iframe>
    </div>
  );
}
