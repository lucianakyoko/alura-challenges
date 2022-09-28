import { LogoContainer } from './style';

export function Logo({isFixedSize}) {
  return (
    <LogoContainer
      className={isFixedSize ? 'fixed-size' : ''}      
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 28"
    >
      <path
        fill="#2A7AE4"
        d="M25.543 18.772l-1.29-8.937c-.331-2.298-2.332-4.002-4.687-4.002H8.842c-2.355 0-4.356 1.704-4.687 4.002l-1.29 8.937c-.26 1.796 1.148 3.395 2.982 3.395.805 0 1.563-.315 2.13-.875l2.676-2.625h7.102l2.663 2.625c.568.56 1.338.875 2.13.875 1.847 0 3.256-1.599 2.995-3.395zM13.02 12.833h-2.367v2.334H9.469v-2.334H7.102v-1.166h2.367V9.333h1.184v2.334h2.367v1.166zm4.735-1.166A1.179 1.179 0 0116.57 10.5c0-.642.533-1.167 1.184-1.167.65 0 1.184.525 1.184 1.167s-.533 1.167-1.184 1.167zm2.367 3.5A1.179 1.179 0 0118.94 14c0-.642.532-1.167 1.183-1.167s1.184.525 1.184 1.167-.533 1.167-1.184 1.167z"
      ></path>
      <path
        fill="#464646"
        d="M72.773 17.92c-.805.793-1.742 1.19-2.812 1.19-.663 0-1.288-.13-1.875-.392a4.826 4.826 0 01-1.52-1.078 5.339 5.339 0 01-1.022-1.61 5.453 5.453 0 01-.37-2.016c0-.681.123-1.32.37-1.918a5.067 5.067 0 011.037-1.582 4.9 4.9 0 011.562-1.078 4.654 4.654 0 011.946-.406c.947 0 1.756.196 2.429.588.681.392 1.193.92 1.534 1.582l-1.463 1.064a2.68 2.68 0 00-1.08-1.134 2.94 2.94 0 00-1.491-.392c-.426 0-.82.089-1.18.266-.35.177-.652.42-.908.728-.246.308-.44.663-.583 1.064a4.035 4.035 0 00-.198 1.274c0 .467.075.905.227 1.316.151.401.36.751.625 1.05.265.299.578.537.937.714.37.168.767.252 1.193.252.976 0 1.856-.453 2.642-1.358v-.7h-2.03V13.93h3.65v5.11h-1.62v-1.12zM79.33 19.18a4.27 4.27 0 01-1.62-.294 3.803 3.803 0 01-1.235-.826 3.725 3.725 0 01-.795-1.204 3.904 3.904 0 01-.27-1.442c0-.523.09-1.013.27-1.47.18-.467.44-.873.78-1.218.342-.355.754-.635 1.237-.84a4.243 4.243 0 011.647-.308c.606 0 1.146.103 1.62.308.482.205.89.48 1.22.826.342.345.597.747.768 1.204a3.867 3.867 0 01.255 1.778c0 .112-.009.205-.028.28h-5.752c.028.29.099.546.213.77a1.905 1.905 0 001.05.938c.228.084.465.126.71.126.38 0 .735-.089 1.066-.266.341-.187.573-.43.696-.728l1.634.448c-.275.56-.715 1.022-1.321 1.386-.597.355-1.312.532-2.145.532zm1.932-4.424c-.048-.55-.256-.99-.625-1.316-.36-.336-.8-.504-1.321-.504-.256 0-.497.047-.725.14a1.795 1.795 0 00-.582.364 2.03 2.03 0 00-.426.574 2.091 2.091 0 00-.185.742h3.864zM87.833 19.18a4.27 4.27 0 01-1.62-.294 3.804 3.804 0 01-1.235-.826 3.723 3.723 0 01-.796-1.204 3.904 3.904 0 01-.27-1.442c0-.523.09-1.013.27-1.47.18-.467.44-.873.782-1.218.34-.355.752-.635 1.235-.84a4.243 4.243 0 011.648-.308c.606 0 1.146.103 1.62.308.482.205.89.48 1.22.826.342.345.597.747.768 1.204a3.867 3.867 0 01.255 1.778c0 .112-.01.205-.028.28h-5.753c.029.29.1.546.213.77a1.905 1.905 0 001.052.938c.227.084.464.126.71.126.379 0 .734-.089 1.065-.266.34-.187.573-.43.696-.728l1.633.448c-.274.56-.715 1.022-1.32 1.386-.597.355-1.312.532-2.145.532zm1.931-4.424c-.047-.55-.255-.99-.624-1.316-.36-.336-.8-.504-1.322-.504a1.89 1.89 0 00-.724.14 1.795 1.795 0 00-.582.364c-.17.159-.313.35-.426.574a2.091 2.091 0 00-.185.742h3.863zM97.969 19.04l-2.159-3.178-1.023.994v2.184h-1.903V8.82h1.903v6.202l2.983-3.304h2.031l-2.77 3.108L100 19.04h-2.031z"
      ></path>
      <path
        fill="#2A7AE4"
        d="M32.257 9.1h1.733l3.835 9.94h-2.017l-.938-2.478h-3.522l-.923 2.478h-2.017l3.849-9.94zm2.258 6.104l-1.392-3.906-1.448 3.906h2.84zM38.732 8.82h1.903v7.868c0 .27.067.48.2.63.132.15.321.224.567.224.114 0 .237-.019.37-.056.142-.037.274-.084.397-.14l.256 1.428a3.713 3.713 0 01-.895.28c-.34.065-.648.098-.923.098-.597 0-1.06-.154-1.392-.462-.322-.317-.483-.765-.483-1.344V8.82zM45.527 19.18c-.767 0-1.35-.243-1.747-.728-.398-.485-.597-1.204-.597-2.156v-4.592h1.904v4.186c0 1.13.411 1.694 1.235 1.694.37 0 .725-.107 1.066-.322.35-.224.634-.56.852-1.008v-4.55h1.903v5.18c0 .196.033.336.1.42.075.084.194.13.355.14v1.596a4.006 4.006 0 01-.824.084c-.341 0-.62-.075-.838-.224a.94.94 0 01-.37-.644l-.042-.588a3.157 3.157 0 01-1.279 1.134 3.893 3.893 0 01-1.718.378zM56.466 13.328a3.73 3.73 0 00-1.548.336c-.455.205-.781.518-.98.938v4.438h-1.904v-7.336h1.748v1.568c.132-.252.288-.476.468-.672.18-.205.374-.383.583-.532.208-.15.416-.261.625-.336.217-.084.426-.126.625-.126h.227c.057 0 .109.005.156.014v1.708zM59.461 19.18c-.36 0-.696-.056-1.008-.168a2.593 2.593 0 01-.81-.49 2.462 2.462 0 01-.54-.742 2.27 2.27 0 01-.184-.924c0-.345.076-.663.227-.952.161-.299.379-.55.654-.756.284-.205.62-.364 1.008-.476a4.27 4.27 0 011.278-.182c.332 0 .654.028.966.084a4 4 0 01.852.238v-.42c0-.485-.142-.859-.426-1.12-.274-.261-.686-.392-1.235-.392-.398 0-.786.07-1.165.21a5.44 5.44 0 00-1.165.616l-.582-1.19a5.552 5.552 0 013.096-.938c1.07 0 1.899.261 2.486.784.597.513.895 1.26.895 2.24v2.282c0 .196.033.336.1.42.075.084.193.13.354.14v1.596a4.292 4.292 0 01-.838.098c-.36 0-.639-.08-.838-.238a1.033 1.033 0 01-.355-.63l-.043-.406c-.33.43-.733.756-1.207.98-.473.224-.98.336-1.52.336zm.54-1.372c.322 0 .625-.056.91-.168.293-.112.52-.261.681-.448.208-.159.313-.336.313-.532v-.84a4.26 4.26 0 00-.74-.196 3.71 3.71 0 00-.766-.084c-.492 0-.895.112-1.207.336-.313.215-.47.49-.47.826 0 .317.124.583.37.798.246.205.55.308.91.308z"
      ></path>
    </LogoContainer>
  );
}