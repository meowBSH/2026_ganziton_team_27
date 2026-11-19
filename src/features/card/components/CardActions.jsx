import { Link } from 'react-router-dom'

const ACTION_BUTTON =
  'flex h-13.5 items-center justify-center rounded-[41px] bg-ink text-base font-semibold text-canvas disabled:opacity-40'

/**
 * 사건 카드 아래의 "이미지 저장", "인스타 공유", "게시판 공유" 버튼.
 *
 * @param {{
 *   onSave: () => void,
 *   onShareStory?: () => void,
 *   shareTo?: string,
 *   saveDisabled?: boolean,
 * }} props
 * - `onSave`: 카드 이미지를 파일로 저장
 * - `onShareStory`: 인스타 스토리 공유 실행
 * - `shareTo`: 게시판 공유 화면 주소
 * - `saveDisabled`: 카드 이미지가 아직 없으면 `true`로 두어 비활성화한다
 */
export const CardActions = ({ onSave, onShareStory, shareTo, saveDisabled = false }) => (
  <div className="flex flex-col gap-2.5">
    <div className="grid grid-cols-2 gap-1.75">
      <button type="button" onClick={onSave} disabled={saveDisabled} className={ACTION_BUTTON}>
        이미지 저장
      </button>
      <button
        type="button"
        onClick={onShareStory}
        disabled={saveDisabled || !onShareStory}
        className={ACTION_BUTTON}
      >
        인스타 공유
      </button>
    </div>
    {shareTo && (
      <Link to={shareTo} className={ACTION_BUTTON}>
        게시판 공유
      </Link>
    )}
  </div>
)
