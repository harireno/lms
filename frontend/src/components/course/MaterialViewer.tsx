import type { LessonMaterial } from "@/types/course.types";

type MaterialViewerProps = {
  material: LessonMaterial;
};

export default function MaterialViewer({ material }: MaterialViewerProps) {
  if (material.type === "html") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-html">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">HTML</span>
            <h3>{material.title}</h3>
          </div>
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div
          className="lesson-html-renderer"
          dangerouslySetInnerHTML={{
            __html:
              material.htmlContent ??
              "<p>No HTML content is available for this lesson material yet.</p>",
          }}
        />
      </article>
    );
  }

  if (material.type === "video") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-video">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">VIDEO</span>
            <h3>{material.title}</h3>
          </div>
          {material.duration ? (
            <span className="lesson-duration">{material.duration}</span>
          ) : null}
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div className="lesson-video-placeholder">
          <div className="lesson-video-placeholder-icon">▶</div>
          <div>
            <strong>Video lesson resource</strong>
            <p>Use the button below to open the video material.</p>
          </div>
        </div>

        {material.url ? (
          <a
            href={material.url}
            className="material-link"
            target="_blank"
            rel="noreferrer"
          >
            Watch Video
          </a>
        ) : null}
      </article>
    );
  }

  if (material.type === "pdf") {
    return (
      <article className="lesson-material-viewer lesson-material-viewer-file">
        <div className="lesson-viewer-head">
          <div>
            <span className="material-chip">PDF</span>
            <h3>{material.title}</h3>
          </div>
        </div>

        <p className="lesson-viewer-copy">{material.description}</p>

        <div className="lesson-file-card">
          <div className="lesson-file-icon">PDF</div>
          <div>
            <strong>{material.fileName ?? "lesson-material.pdf"}</strong>
            <p>Portable reading material for structured offline review.</p>
          </div>
        </div>

        {material.url ? (
          <a
            href={material.url}
            className="material-link"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
        ) : null}
      </article>
    );
  }

  return (
    <article className="lesson-material-viewer lesson-material-viewer-file">
      <div className="lesson-viewer-head">
        <div>
          <span className="material-chip">DOCX</span>
          <h3>{material.title}</h3>
        </div>
      </div>

      <p className="lesson-viewer-copy">{material.description}</p>

      <div className="lesson-file-card">
        <div className="lesson-file-icon">DOCX</div>
        <div>
          <strong>{material.fileName ?? "lesson-material.docx"}</strong>
          <p>Document resource for downloadable worksheets or lesson packs.</p>
        </div>
      </div>

      {material.url ? (
        <a
          href={material.url}
          className="material-link"
          target="_blank"
          rel="noreferrer"
        >
          Open DOCX
        </a>
      ) : null}
    </article>
  );
}
