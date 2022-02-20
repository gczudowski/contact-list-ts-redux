import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import PersonInfoItem from '@src/pages/mainPage/components/personInfoItem/PersonInfoItem';
import { IContactStateItem } from '@src/types/contacts.type';
import { Flipper, Flipped } from 'react-flip-toolkit';

type Props = {
  contactItems: IContactStateItem[];
  onClick: ({ isActive, itemId }: { isActive: boolean; itemId: string }) => void;
};

function PersonInfoList({ contactItems, onClick }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Flipper flipKey={contactItems.map((item: IContactStateItem): string => item.id).join('')}>
        {contactItems.map((contactItem: IContactStateItem) => (
          <Flipped key={contactItem.id} flipId={contactItem.id}>
            <div>
              <PersonInfoItem contactItem={contactItem} onClick={onClick} />
            </div>
          </Flipped>
        ))}
      </Flipper>
    </div>
  );
}
const useStyles = createUseStyles({
  container: {
    display: 'block',
    overflowAnchor: 'none',
  },
});

export default PersonInfoList;
